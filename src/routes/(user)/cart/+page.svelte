<script lang="ts">

    import {Button, Checkbox, Divider, Input} from "@svelteuidev/core";
    import PlusCircle from "$lib/icons/PlusCircle.svelte";
    import MinusCircle from "$lib/icons/MinusCircle.svelte";
    import Trash from "$lib/icons/Trash.svelte";
    import {screenWidthStore} from "$lib/utils/stores";


    import sticky from '$lib/utils/stickyDetector';

    export let stickToTop = true;
    let isStuck = false;

    function handleStuck(e) {
        isStuck = e.detail.isStuck;
    }
</script>
<div class="grid grid-cols-3 md:grid-cols-6 space-x-8">
    <div class="col-span-4 space-y-4">
        <h4 class="font-extrabold text-2xl">Cart</h4>
        <div use:sticky={{stickToTop}} class="sticky top-12 pt-4 z-10 bg-white" on:stuck={handleStuck}>
            <Checkbox label="Select all" size="sm"/>
            <Divider size="lg"/>
        </div>

        <div class="flex flex-col">
            {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as mantap}
                <div class="pt-2">
                    <div class="flex flex-row gap-x-4">
                        <Checkbox size="sm"/>
                        <img src="/emptycart.png" alt="gambar" class="object-contain aspect-square h-full max-h-20">
                        <div class="truncate">
                            <p class="truncate">{mantap}</p>
                            <p class="font-semibold">Rp. 69</p>
                        </div>
                    </div>
                    <div class="flex">
                        <button class="text-sm flex-1 text-start"
                        >Move to Wishlist
                        </button
                        >
                        <div class="justify-end flex {$screenWidthStore > 1024 ? 'gap-x-5' : 'gap-x-2'}">
                            <button
                                    class="btn-icon btn-icon-sm {$screenWidthStore > 1024 ? 'w-8' : 'w-6'}"
                                    type="button"
                                    aria-label="Delete Product"

                            >
                                <Trash/>
                            </button>

                            <div class="grid grid-cols-[auto_1fr_auto] w-fit">
                                <button
                                        class="btn btn-sm text-primary-500 p-0"

                                >
                                    <span><MinusCircle/></span>
                                </button>
                                <!--                                <input-->
                                <!--                                        type="number"-->
                                <!--                                        class="input w-8 p-0 text-center"-->
                                <!--                                />-->
                                <Input variant='unstyled' size="xs" override="w-10" class="w-fit text-center"/>
                                <button
                                        class="btn btn-sm text-primary-500 p-0"

                                >
                                    <span><PlusCircle/></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider class="last:hidden" size="lg"/>
            {/each}
        </div>
    </div>
    <div class="col-span-2 hidden md:grid grid-flow-row bg-white drop-shadow-md shadow rounded-md p-4 space-y-4 h-fit sticky top-24">
        <h4 class="font-semibold text-lg">Shopping summary</h4>

        <div class="grid grid-cols-2">

            <p class="text-slate-500 text-sm">Total Price</p>
            <p class="text-slate-500 text-sm text-end">Rp 0</p>

        </div>
        <Divider/>
        <h4 class="font-bold text-lg">Grand Total</h4>
        <Button class="font-bold text-lg h-12" fullSize ripple variant="filled">Checkout</Button>
    </div>

</div>