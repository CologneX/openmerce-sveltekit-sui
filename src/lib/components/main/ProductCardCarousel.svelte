<script lang="ts">
    import {Card} from "@svelteuidev/core";

    export let product;
</script>

<swiper-slide class="rounded-md shadow-xl aspect-[4/2]">
   <Card>
       <Card.Section first>
           <img src="/coding%20picture.jpg" alt="pic" class="aspect-square rounded-t-md">

       </Card.Section>
   </Card>
    <div class="p-4">
        {product}
    </div>

</swiper-slide>