<script>
  const handleMouseenter = () => console.log("time to dance");
</script>
<svelte:body
    on:mouseenter={handleMouseenter}
/>
