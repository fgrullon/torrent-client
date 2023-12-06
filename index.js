"use strict";

import fs from "fs";
import bencode from "bencode";

/*
 *  Read torrent file from local storage and pass it to the decode function of bencode library
 */
const torrent = bencode.decode(fs.readFileSync("puppy.torrent"));

console.log(torrent.announce.toString("utf8"));
