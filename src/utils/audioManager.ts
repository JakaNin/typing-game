export class AudioManager {
  audioContext: AudioContext;
  sounds: { [key: string]: AudioBuffer };

  constructor() {
    this.audioContext = new (window.AudioContext || window.AudioContext)();
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
