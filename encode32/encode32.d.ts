// Type definitions for encode32
// Project: http://github.com/femto113/node-encode32.git

declare namespace encode32 {
    interface Encoder {
        // TODO: Complete class
    }
    // Base32 encoder function for 32-bit number
    export function encode32(no: number): string;
    // Base32 decoder function for 32-bit Base32 string
    export function decode32(base32: string): number;
    // Base32 encoder function for 41-bit number for hold current timestamps
    export function encode41(no: number): string;
    // Base32 decoder function for 41-bit Base32 string that hold current timestamps
    export function decode41(base32: string): number;
    // Base32 encoder function for date or current date
    export function encodeDate(date?: Date): string;
    // Base32 decoder function for  Date Base32 string
    export function decodeDate(base32: string): Date;
    // Base32 encoder function for a number with an arbitrary number of bits (with no checksum)
    export function encode(no: number): string;
    // Base32 decoder function for a number string with an arbitrary number of bits (with no checksum)
    export function decode(base32: string): number;
    // Generate Base32 encoder function for n-bit number
    export function fixedEncoder(bitsPerNumber: number): (no: number) => string;
    // Generate Base32 decoder function for n-bit Base32 string
    export function fixedDecoder(bitsPerNumber: number): (base32: string) => number;    
}

export = encode32;