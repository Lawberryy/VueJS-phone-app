<template>
    <div class="clavier">
        <!-- <h1>C'est la page clavier</h1> -->
        <div class="bloc-num">
            <div>
                <div id="num" v-for="value in divNumber" :key="value">{{ value }}</div>
            </div>
            <div id="find-contact">???</div>
        </div>
        <div id="touches">
            <span class="touche" v-for="value in touchesValues" :key="value" @click="addInDivNumber(value)">{{ value }}</span>
            <div class="touche" id="call"><img class="phone-logo" src="@/assets/phone-solid.svg" alt="phone-logo"></div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'ClavierView',

    // data() {
    //     return {
    //         touchesValues: [1,2,3,4,5,6,7,8,9,'*',0,'#'],
    //     }
    // },

    computed: {
        touchesValues() {
			return this.$store.state.touchesValues
		},
		divNumber() {
			return this.$store.state.divNumber
		}
	},

    methods: {
        addInDivNumber(value) {
            this.$store.commit('addInDivNumber', value)
        }
    }
}
</script>


<style>

.clavier {
    display: flex;
    flex-direction: column;
}

#find-contact {
    color: rgb(0, 101, 253);
    margin-top: 10px;
    text-align: center;
}

.bloc-num {
    margin-top: 15px;
}
#num {
    font-size: 1.5rem;
}

#touches {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    width: 80%;
    margin-left: 10%;
    row-gap: 12px;
    margin-top: 10vh;
}

.bloc-num div:first-child {
    display: flex;
    justify-content: center;
}

.touche {
    /* padding: 10px; */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(81, 82, 86);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    font-size: 1.8rem;
}

.touche:last-child {
    grid-column: 2/3;
    grid-row: 5/6;
    background-color: rgb(36, 206, 101);
}

.phone-logo {
    width: 30px;
}

</style>