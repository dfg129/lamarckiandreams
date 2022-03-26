<script>
import { getAllContexts } from "svelte";

    export let filter = 'all'
</script>

<div class = "filters btn-group stack-exception">
    <button class="btn toggle-btn" class:btn_primar={filter === 'all'} aria-pressed={filter === 'all'} on:click{()=> filter = 'all'}>
</div>