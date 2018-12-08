<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout>
            <StackLayout class="containerBar" v-for="(item, index) in items" v-bind:key="index" orientation="vertical" verticalAlignment="top">
                <Label class="title" :text="`${item.category} : ${item.used} of ${item.budgetassign}`" />
                <GridLayout columns="*" rows="*">
                    <Label row="0" col="0" class="layoutBar" />
                    <Label row="0" col="0" :class="widthBar[index].css" horizontalAlignment="left" :text="widthBar[index].text" :width="widthBar[index].percent" />
                </GridLayout>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        category: "Groceries",
                        used: 70,
                        budgetassign: 100
                    },
                    {
                        category: "Home",
                        used: 75,
                        budgetassign: 90
                    },
                    {
                        category: "Sport",
                        used: 12,
                        budgetassign: 30
                    },
                    {
                        category: "Car",
                        used: 80,
                        budgetassign: 150
                    }
                ]
            };
        },
        computed: {
            widthBar() {
                return this.items.map(function(item) {
                    let bar = {}
                    let getPercent = Number( (item.used * 100) / item.budgetassign).toFixed(2) + "%"
                    let getNumber = getPercent.slice(0,-1) + " %"
                    let getCss = parseInt(getPercent) > 100 ? "progressBar-exceeds" : "progressBar"
                    return bar = {
                        "percent" : getPercent,
                        "text"   : getNumber,
                        "css"     : getCss
                    }
                        
                })
            },   
            descriptionBar(item) {
                return item.category + " : " + item.used + " of " + item.budgetassign
            }
        },

    };
</script>

<style scoped>
    .containerBar {
        margin: 10;
        height: 80;
    }

    .title {
        font-size: 18;
        color: #000000;
        padding-left: 8;
        padding-top: 10;
    }

    .layoutBar {
        background-color: #e9ebee;
        border-radius: 10;
        margin-top: 10;
        border-color: #cdced0;
        border-width: 1;
        height: 30;
    }

    .progressBar {
        background-color: #f5c145;
        border-radius: 5;
        margin-top: 13;
        margin-bottom: 3;
        animation-name: fadeInLeft;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        height: 29;
        font-size: 15;
        text-align: center;
        font-weight: bold;
    }

    .progressBar-exceeds {
        background-color: #c51919;
        border-radius: 5;
        margin-top: 13;
        margin-bottom: 3;
        animation-name: fadeInLeft;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        height: 29;
        font-size: 15;
        text-align: center;
        font-weight: bold;
        color: white;
    }
</style>