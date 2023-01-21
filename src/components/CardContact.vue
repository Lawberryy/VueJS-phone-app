<template>
    <div>
        <h2>{{contact.nom}}</h2>
        <span>{{contact.numero}}</span>
        <img class="phone-logo" src="@/assets/phone-solid.svg" alt="phone-logo">
    </div>
</template>


<script>
export default {
    name: 'CardContact',
    props: [
        'contact'
    ]
}
</script>


<style scoped>

div {
    background-color: rgb(81, 82, 86);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

h2 {
    font-size: 1rem;
}

.phone-logo {
    background-color: rgb(36, 206, 101);
    padding: 2px;
    cursor: pointer;
}

</style>