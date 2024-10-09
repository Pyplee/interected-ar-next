declare module 'aframe' {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-marker': any;
      'a-entity': {
        'gltf-model'?: string;
        'src'?: string;
        'scale'?: string;
        'position'?: string;
      };
    }
  }
}