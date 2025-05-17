export class AudioManager {
  audioContext: AudioContext;
  sounds: { [key: string]: AudioBuffer };

  constructor() {
    const AudioCtx = (window.AudioContext ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitAudioContext) as typeof AudioContext;
    this.audioContext = new AudioCtx();
    this.sounds = {};
  }

  loadSound(name: string, url: string): Promise<void> {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.statusText}`);
        }
        return response.arrayBuffer();
      })
      .then((arrayBuffer) => this.audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        this.sounds[name] = audioBuffer;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loadAllSounds(soundMap: { [key: string]: string }): Promise<void[]> {
    const promises = Object.entries(soundMap).map(([name, url]) =>
      this.loadSound(name, url),
    );
    return Promise.all(promises);
  }

  playSound(name: string) {
    const soundToPlay = this.sounds[name];
    if (soundToPlay) {
      const soundNode = this.audioContext.createBufferSource();
      soundNode.buffer = soundToPlay;
      soundNode.connect(this.audioContext.destination);
      soundNode.start();
    }
  }
}
