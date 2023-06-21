<script lang="ts">
    import {goto} from "$app/navigation";

    let products = [
        'Product 1',
        'Product 2',
        'Product 3',
        'Product 4',
        'Product 5',
        'Product 6',
        'Product 7',
        'Product 8',
    ];
</script>

<svelte:head>
    <title>Wishlist | OpenMerce</title>
</svelte:head>

<div class="space-y-8">
    <h4 class="font-extrabold text-2xl">Wishlist</h4>
    <div class="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {#each products as product}
            <div
                    class="rounded-md shadow-md cursor-pointer"
                    on:click={() => goto(`/products/${product}`)}
            >
                <img src="/emptycart.png" alt="pic" class="aspect-square object-contain"/>

                <div class="p-3">
                    {product}
                </div>
            </div>
        {/each}
    </div>
</div>