class HelloWorld {
    getInfo() {
      return {
        id: 'helloworld',
        name: 'It works!',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Hello!'
          }
        ]
      };
    }
  
    hello() {
      return 'Nigger!';
    }
  }
  
  Scratch.extensions.register(new HelloWorld());
