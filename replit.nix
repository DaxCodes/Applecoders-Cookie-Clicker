{ pkgs }: {
    deps = [
      pkgs.imagemagick6
      pkgs.nodePackages.vscode-langservers-extracted
      pkgs.nodePackages.typescript-language-server
    ];
  }