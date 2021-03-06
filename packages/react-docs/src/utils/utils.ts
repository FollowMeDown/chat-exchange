export const utils = {
    spawnSwitchErr(name: string, value: any): Error {
        return new Error(`Unexpected switch value: ${value} encountered for ${name}`);
    },
};
