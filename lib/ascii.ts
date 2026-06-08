/* Hand-built ASCII art: a friendly machine family (Susan-Kare Happy Mac, in text). */

export const HAPPY_MAC = String.raw`
+------------------------+
|  +------------------+  |
|  |                  |  |
|  |   O          O   |  |
|  |        ..        |  |
|  |    \______/      |  |
|  |                  |  |
|  +------------------+  |
|                        |
+------------------------+
   \__________________/
   /__________________\
`.trim();

/** kept for older imports */
export const HERO_ASCII = HAPPY_MAC;

export const SAD_MAC = String.raw`
+------------------------+
|  +------------------+  |
|  |                  |  |
|  |   x          x   |  |
|  |        ..        |  |
|  |     /------\     |  |
|  |                  |  |
|  +------------------+  |
|                        |
+------------------------+
   \__________________/
   /__________________\
`.trim();

/** Tiny prompt motif used as a sign-off. */
export const PROMPT = String.raw`terminal@saadat:~$ ./say-hello.sh`;

/** Fake boot lines for terminal flavour. */
export const BOOT = [
  "> mounting /dev/saadat ......... ok",
  "> loading profile ............. ok",
  "> ready.",
];
