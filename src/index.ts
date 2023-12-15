import express, { RequestHandler } from "express";
import core from "express-serve-static-core";
import fs from "fs";
import http from "http";
import https from "https";
import path from "path";

// Comment this last import and it will build !
import pc from "picocolors"; 

type Foo = {
  a: string;
};

const str: string = 'Hello !';

console.log(str);
