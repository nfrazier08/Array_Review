window.onload = function (){

const inspirationalWomen = [
    {first: 'Sallie', last: 'Krawcheck', company: 'Ellevest', founded: 2014}, 
    {first: 'Kathryn', last: 'Minshew' , company: 'The Muse', founded: 2011}, 
    {first: 'Emilie', last: 'Aries', company: 'BossedUp', founded: 2015}, 
    {first: 'Aminatou', last: 'Sow', company: 'Tech LadyMafia', founded: 2011}, 
    {first: 'Whitney', last: 'White', company: 'Melanin Haircare', founded: 2015}, 
    {first: 'Camille', last: 'Hearst', company: 'Kit', founded: 2015}, 
    {first: 'Lauren', last: 'Hazzouri', company: 'HeyLauren', founded: 2016},
    {first: 'Tiffany', last: 'Dufu', company: 'The Cru', founded: 2018}
];

const people = ['Obama, Michelle', 'Mai, Ella', 'Winfrey, Oprah', 'Dufu, Tiffany', 'St. John, Bozoma'];

    // Array.prototype.filter()
    // 1. Filter the list of women who founded companies in 2011

    const twentyEleven = inspirationalWomen.filter(women => women.founded >= 2011 && women.founded < 2012)
    console.table(twentyEleven);
    
    // Array.prototype.map()
    // Takes in an array, does something to the array and returns new array of same length
    // 2. Give us an array of the women first and last names

    //const fullNames = inspirationalWomen.map(women => women.first + " " + women.last)
    //OR
    const fullNames = inspirationalWomen.map(women => `${women.first} ${women.last}`)
    console.log(fullNames);


    // Array.prototype.sort()    
    // 3. Sort the people by founder data, oldest to youngest
    const ordered = inspirationalWomen.sort(function(a,b){
        if(a.founded > b.founded){
            return 1;
        } else {
            return -1
        };
    });

    //OR
    //Ternary Operator (shorthand if statement) - return 1 if a.founded is less than b.founded, otherwise return -1
    //const ordered = inspirationalWomen.sort((a,b) => a.founded > b.founded ? 1: -1);

    console.table(ordered);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const artists = [
        {first: 'Joan', last: 'Mitchell', born: 1925, died: 1992},
        {first: 'Georgia', last: 'O\'Keefe', born: 1887, died:1986}, 
        {first: 'Elizabeth', last: 'Catlett', born: 1915, died: 2012}, 
        {first: 'Purvis', last: 'Young', born: 1943, died: 2010}
    ];

    


    // 5. Sort the inventors by years lived


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const medium = ['book', 'essay', 'article', 'video', 'book', 'essay', 'essay', 'book', 'video', 'article', 'article', 'book', 'book'];

};