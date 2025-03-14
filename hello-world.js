class HelloWorld {
    getInfo() {
      return {
        id: 'vedmedor-URLs',
        name: 'URL',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Open URL'
          }
        ]
      };
    }
  
    hello() {
        window.open("https://example.com", "_blank");
    }
  }
  
  Scratch.extensions.register(new HelloWorld());
