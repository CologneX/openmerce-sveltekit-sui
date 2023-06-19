<script lang="ts">

    import {Button, Checkbox, Divider} from "@svelteuidev/core";
</script>
<div class="space-y-2 grid grid-cols-3 md:grid-cols-6 space-x-8">

    <div class="col-span-4 space-y-4">
        <h4 class="font-extrabold text-2xl">Cart</h4>
        <Checkbox label="Select all"/>
        <Divider size="lg"/>

        <div class="flex flex-col space-y-2">
            <Divider class="last:hidden"/>
        </div>
    </div>
    <div class="col-span-2 hidden md:grid grid-flow-row bg-white drop-shadow-md shadow rounded-md p-4 space-y-4">
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