// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/concepts/cli-skeleton

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "rustup",
  description: "The Rust toolchain installer",
  subcommands: [
    {
      name: "show",
      description: "Show the active and installed toolchains or profiles",
      subcommands: [
        {
          name: "active-toolchain",
          description: "Show the active toolchain",
        },
        {
          name: "home",
          description: "Display the computed value of RUSTUP_HOME",
        },
        {
          name: "profile",
          description: "Show the current profile",
        },
        {
          name: "keys",
          description: "Display the known PGP keys",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
      ],

      // If a subcommand or option takes an argument, you must include the args prop, even if it's an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/concepts/dynamic-suggestions
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
    },
    {
      name: "update",
      description: "Update Rust toolchains and rustup",

      options: [
        {
          name: "--force",
          description: "Force an update, even if some components are missing",
        },
        {
          name: "--force-non-host",
          description:
            "Install toolchains that require an emulator. See https://github.com/rust-lang/rustup/wiki/Non-host-toolchains",
        },
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--no-self-update",
          description:
            "Don't perform self update when running the `rustup update` command",
        },
      ],
      args: {
        name: "toolchain",
        description:
          "Toolchain name, such as 'stable', 'nightly', or '1.8.0'. For more information see `rustup help toolchain`",
        isOptional: true,
      },
    },
    {
      name: "check",
      description: "Check for updates to Rust toolchains and rustup",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      args: {
        name: "toolchain",
        description:
          "Toolchain name, such as 'stable', 'nightly', or '1.8.0'. For more information see `rustup help toolchain`",
        isOptional: true,
      },
    },
    {
      name: "default",
      description:
        "Sets the default toolchain to the one specified. If the toolchain is not already installed then it is installed first.",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
    },
    {
      name: "target",
      description: "Modify a toolchain's supported targets",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List installed and available targets",
        },
        {
          name: "add",
          description: "Add a target to a Rust toolchain",
        },
        {
          name: "remove",
          description: "Remove a target from a Rust toolchain",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "toolchain",
      description: "Modify or query the installed toolchains",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List installed toolchains",
        },
        {
          name: "install",
          description: "Install or update a given toolchain",
        },
        {
          name: "uninstall",
          description: "Uninstall a toolchain",
        },
        {
          name: "link",
          description: "Create a custom toolchain by symlinking to a directory",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "component",
      description: "Modify a toolchain's installed components",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List installed and available components",
        },
        {
          name: "add",
          description: "Add a component to a Rust toolchain",
        },
        {
          name: "remove",
          description: "Remove a component from a Rust toolchain",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand(s)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "override",
      description: "Modify directory toolchain overrides",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List directory toolchain overrides",
        },
        {
          name: "set",
          description: "Set the override toolchain for a directory",
        },
        {
          name: "unset",
          description: "Remove the override toolchain for a directory",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand(s)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a command with an environment configured for a given toolchain",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--install",
          description: "Install the requested toolchain if needed",
        },
      ],
      args: [
        {
          name: "<toolchain>",
          description:
            "Toolchain name, such as 'stable', 'nightly', or '1.8.0'.",
        },
        {
          name: "<command>",
          isVariadic: true,
        },
      ],
    },
    {
      name: "which",
      description: "Display which binary will be run for a given command",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--toolchain",
          description:
            "Toolchain name, such as 'stable', 'nightly', or '1.8.0'.",
          args: {
            name: "<toolchain>",
            description:
              "Toolchain name, such as 'stable', 'nightly', or '1.8.0'.",
          },
        },
      ],
    },
    {
      name: "doc",
      description: "Open the documentation for the current toolchain",
      options: [
        {
          name: "--alloc",
          description: "The Rust core allocation and collections library",
        },
        {
          name: "--book",
          description: "The Rust Programming Language book",
        },
        {
          name: "--cargo",
          description: "The Cargo Book",
        },
        {
          name: "--core",
          description: "The Rust Core Library",
        },
        {
          name: "--edition-guide",
          description: "The Rust Edition Guide",
        },
        {
          name: "--embedded-book",
          description: "The Embedded Rust Book",
        },
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--nomicon",
          description: "The Dark Arts of Advanced and Unsafe Rust Programming",
        },
        {
          name: "--path",
          description: "Only print the path tp the documentation",
        },
        {
          name: "--proc_macro",
          description:
            "A support library for macro authors when defining new macros",
        },
        {
          name: "--reference",
          description: "The Rust Reference",
        },
        {
          name: "--rust-by-example",
          description:
            "A collection of runnable examples that illustrate various Rust concepts and standard libraries",
        },
        {
          name: "--rustc",
          description: "The compiler for the Rust programming language",
        },
        {
          name: "--rustdoc",
          description: "Generate documentation for Rust projects",
        },
        {
          name: "--std",
          description: "Standard library API documentation",
        },
        {
          name: "--test",
          description:
            "Support code for rustc's built in unit-test and micro-benchmarking framework",
        },
        {
          name: "--unstable-book",
          description: "--unstable-book",
        },
        {
          name: "--toolchain",
          description:
            "Toolchain name, such as 'stable', 'nightly', or '1.8.0'.",
          args: {
            name: "<toolchain>",
          },
        },
      ],
      args: {
        name: "<topic>",
        description:
          "Topic such as 'core', 'fn', 'usize', 'eprintln!', 'core::arch', 'alloc::format!', 'std::fs', 'std::fs::read_dir', 'std::io::Bytes', 'std::iter::Sum', 'std::io::error::Result' etc...",
      },
    },
    {
      name: "man",
      description: "View the man page for a given command",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--toolchain",
          description:
            "Toolchain name, such as 'stable', 'nightly', or '1.8.0'.",
          args: {
            name: "<toolchain>",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Prints help information",
    },
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
    {
      name: ["-q", "--quiet"],
      description: "Disable progress output",
    },
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose output",
    },
  ],
  args: {
    name: "toolchain",
    description:
      "release channel (e.g. +stable) or custom toolchain to set override",
    isOptional: true,
  },
};

export default completionSpec;
