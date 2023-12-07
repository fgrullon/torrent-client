"use strict";

import fs from "fs";
import decode from "./lib/bendecode.js";

import url from "node:url";
import dgram from "dgram";
import { Buffer } from "buffer";
import parse from "url-parse";

/*
 *  Read torrent file from local storage and pass it to the decode function of bencode library
 */
const torrent = decode(fs.readFileSync("puppy.torrent"));

const url2 = parse(torrent.announce.toString("utf8"));

const socket = dgram.createSocket("udp4");
const myMsg = Buffer.from("hello?", "utf8");

socket.send(myMsg, 0, myMsg.length, url.port, url.host, () => {});

socket.on("message", (msg) => {
  console.log("message is ", msg);
});
