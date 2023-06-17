<script lang="ts">
    import Banner from "$lib/components/main/Banner.svelte";
    import {Divider} from "@svelteuidev/core";
    import ProductCardCarousel from "$lib/components/main/ProductCardCarousel.svelte";
</script>
<div>

</div>
<svelte:head>
    <title>Main | OpenMerce</title>
</svelte:head>

<Banner/>
<Divider/>
<swiper-container
    slides-per-view={6}
    space-between={10}

>

    {#each [1,2,3,4,5,6,7,8,9,10] as item}
        <ProductCardCarousel product={item} />

    {/each}
</swiper-container>
