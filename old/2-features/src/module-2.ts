/// <reference lib="esnext" />

function sleep(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function* getItemsReallySlowly(items: any): any {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}
//
// function err() {
//     throw Error('My error');
// }

export async function speakLikeSloth2(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}



