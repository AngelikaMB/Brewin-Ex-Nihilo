export default function settlementTrade() {

const industry = [
    {
    "id": 1,
    "value": 'fishing',
    },
        {
    "id": 2,
    "value": 'mining',
    },
    {
    "id": 3,
    "value": 'agriculture',
    },
    {
    "id": 4,
    "value": 'entertainment',
    },
    {
    "id": 5,
    "value": 'a university',
    },
    {
    "id": 6,
    "value": 'a political hub',
    },
    {
    "id": 7,
    "value": 'lumber',
    },
    {
    "id": 8,
    "value": 'tourism',
    },
    {
    "id": 9,
    "value": 'artisan trade goods',
    },
    {
    "id": 10,
    "value": 'the study of magic',
    },
    {
    "id": 11,
    "value": 'religion',
    },
    {
    "id": 12,
    "value": 'developing new technology',
    },
    {
    "id": 13,
    "value": 'shipwrights',
    },
    {
    "id": 14,
    "value": 'an army\'s occupation',
    },
    {
    "id": 15,
    "value": 'a grand temple',
    },
    {
    "id": 16,
    "value": 'prison labor',
    },
    {
    "id": 17,
    "value": 'world-renowned healers',
    },
    {
    "id": 18,
    "value": 'necromancy',
    },
    {
    "id": 19,
    "value": 'zoos filled with exotic\, magical creatures',
    },
    {
    "id": 20,
    "value": 'music',
    },
    {
    "id": 21,
    "value": 'local military games',
    },
    {
    "id": 22,
    "value": 'hunting',
    },
    {
    "id": 23,
    "value": 'rare mushroom collection',
    },
    {
    "id": 24,
    "value": 'quarrying rare stone or minerals',
    },
    {
    "id": 25,
    "value": 'funneling rare alchemical ingredients from adventurers to the blackmarket',
    },
    {
    "id": 26,
    "value": 'shepharding, shearing, spinning wool, and producing fine woolen clothes for colder climates',
    },
    {
    "id": 27,
    "value": 'gathering flowers, berries, and other alchemical ingredients to produce a wide range of dyes'
    }
]

const prosperity = [
    {
    "weight": 5,
    "value": 'has not done well',
    },
    {
    "weight": 6,
    "value": 'is on the verge of collapse',
    },
        {
    "weight": 1,
    "value": 'has prospered',
    },
            {
    "weight": 2,
    "value": 'has thrived\, growing by the day',
    },
            {
    "weight": 1,
    "value": 'has achieved a golden age',
    },
            {
    "weight": 5,
    "value": 'has regressed into widespread poverty',
    },
            {
    "weight": 3,
    "value": 'attracts a constant stream of newcomers',
    },
            {
    "weight": 6,
    "value": 'is usually a ghost town',
    },
            {
    "weight": 4,
    "value": 'has been occupied',
    },
            {
    "weight": 3,
    "value": 'was recently annexed',
    },
            {
    "weight": 2,
    "value": 'is the home of many notable adventurers',
    },
            {
    "weight": 3,
    "value": 'is the home of many notorious adventurers',
    },
            {
    "weight": 4,
    "value": 'is constantly raided',
    },
            {
    "weight": 2,
    "value": 'boasts substantial defenses',
    },
]

// 1 prosperous
// 2 stable
// 3 fluctuating but afloat
// 4 unstable and failing
// 5 recession
// 6 depression


function generate(array) {
  return  array[Math.floor(Math.random() * array.length)];
}

function settlementIndustry() {
        return `${(CityName)} has an economy based around ${generate(industry)} and ${generate(prosperity)}.`
}

return (

    <div>
        <p>{settlementIndustry}</p>
    </div>
)

}
