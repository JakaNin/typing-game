export class AudioManager {
  audioContext: AudioContext;
  sounds: { [key: string]: AudioBuffer };

  constructor() {
    this.audioContext = new (window.AudioContext || window.AudioContext)();
    this.sounds = {};
  }

  loadSound(name: string, url: string) {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => this.audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        this.sounds[name] = audioBuffer;
      });
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
