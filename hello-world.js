class HelloWorld {
  getInfo() {
    return {
      id: 'vedmedor-URLs',
      name: 'URL',
      blocks: [
        {
          opcode: 'openUrl',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open URL [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "https://example.com"
            }
          }
        }
      ]
    };
  }

  openUrl(args) {
    const url = args.URL;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      window.open(url, "_blank");
    } else {
      console.warn("Invalid URL: " + url);
    }
  }
}

Scratch.extensions.register(new HelloWorld());
