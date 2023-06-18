import type {PageLoad} from './$types';

export const load = (async ({params}) => {
    return {
        productID: params.productID,
    }
}) satisfies PageLoad;