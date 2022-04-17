const rankNameLong = ['Private','Corporal','Sergeant','Staff Sergeant','2nd Lieutenant','1st Lieutenant','Captain','Major']
const rankNameShort = ['Pvt','Cpl','Sgt','SSgt','2Lt','1Lt','Cpt','Maj']
const rankNameIds = ['pvt','cpl','sgt','ssgt','2lt','1lt','cpt','maj']



function updateHTML() {
    if(data.currentTab === 0) {
        for(let i = 0; i < 4; i++) {
            DOMCacheGetOrSet(`${rankNameIds[i]}Amt`).innerHTML = `${format(data.enlisted[i])}`
            DOMCacheGetOrSet(`${rankNameIds[i]}Button`).innerHTML = `${format(enlistCost[i])}`
        }
    }
}

const tabIDs = ['manpower','equipment','finances','battleground','promotions','settings']

function tabChangeHTML() {
    for(let i = 0; i < tabIDs.length; i++)
        DOMCacheGetOrSet(tabIDs[i] + 'Area').style.display = i === data.currentTab ? 'flex' : 'none'
}