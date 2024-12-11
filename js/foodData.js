const foods = [
    // Kornprodukter (Referencegruppe)
    { name: "Hvidt Brød", calories: 265, satiety: 5.0 },  // Reference SI = 100
    { name: "Fuldkornsbrød", calories: 259, satiety: 7.1 },  // SI = 142
    { name: "Rugbrød", calories: 259, satiety: 7.4 },  // SI = 148
    { name: "Havregryn", calories: 389, satiety: 7.7 },  // SI = 154
    { name: "Brune Ris", calories: 111, satiety: 6.8 },  // SI = 136
    { name: "Müsli", calories: 354, satiety: 6.3 },  // SI = 126
    { name: "Hvide Ris", calories: 130, satiety: 4.8 },  // SI = 96
    { name: "Risengrød", calories: 134, satiety: 6.0 },  // SI estimeret

    // Proteinrige fødevarer
    { name: "Kogt Fisk", calories: 140, satiety: 8.7 },  // SI = 174
    { name: "Æg", calories: 155, satiety: 7.5 },  // SI = 150
    { name: "Bøf", calories: 187, satiety: 8.4 },  // SI = 168
    { name: "Baked Beans", calories: 127, satiety: 8.5 },  // SI = 170
    { name: "Linser", calories: 116, satiety: 8.3 },  // SI = 166
    { name: "Kikærter", calories: 164, satiety: 8.1 },  // SI = 162
    { name: "Tofu", calories: 76, satiety: 6.0 },  // SI estimeret
    { name: "Kyllingebryst", calories: 165, satiety: 7.0 },  // SI estimeret

    // Frugt
    { name: "Appelsin", calories: 47, satiety: 7.6 },  // SI = 152
    { name: "Æble", calories: 52, satiety: 7.4 },  // SI = 148
    { name: "Banan", calories: 89, satiety: 6.5 },  // SI = 130
    { name: "Vindruer", calories: 67, satiety: 4.9 },  // SI = 98
    { name: "Jordbær", calories: 32, satiety: 6.2 },  // SI estimeret
    { name: "Pære", calories: 57, satiety: 6.1 },  // SI estimeret
    { name: "Vandmelon", calories: 30, satiety: 5.9 },  // SI estimeret
    { name: "Mango", calories: 60, satiety: 6.3 },  // SI estimeret
    { name: "Ananas", calories: 50, satiety: 6.0 },  // SI estimeret
    { name: "Papaya", calories: 43, satiety: 6.4 },  // SI estimeret
    { name: "Kiwi", calories: 61, satiety: 6.5 },  // SI estimeret
    { name: "Blåbær", calories: 57, satiety: 6.0 },  // SI estimeret
    { name: "Hindbær", calories: 52, satiety: 6.3 },  // SI estimeret
    { name: "Fersken", calories: 39, satiety: 6.2 },  // SI estimeret
    { name: "Nektarin", calories: 44, satiety: 6.1 },  // SI estimeret
    { name: "Granatæble", calories: 83, satiety: 6.4 },  // SI estimeret
    { name: "Citron", calories: 29, satiety: 4.5 },  // SI estimeret
    { name: "Lime", calories: 30, satiety: 4.5 },  // SI estimeret
    { name: "Guava", calories: 68, satiety: 6.8 },  // SI estimeret
    { name: "Daddel", calories: 282, satiety: 4.0 },  // SI estimeret
    { name: "Figen", calories: 74, satiety: 5.5 },  // SI estimeret
    { name: "Blommer", calories: 46, satiety: 6.0 },  // SI estimeret
    { name: "Kirsebær", calories: 50, satiety: 6.0 },   // SI estimeret
   // Brød
    { name: "Hvidt Brød", calories: 265, satiety: 5.0 },  // Reference SI = 100
    { name: "Fuldkornsbrød", calories: 259, satiety: 7.1 },  // SI = 142
    { name: "Rugbrød", calories: 259, satiety: 7.4 },  // SI = 148
    { name: "Havregryn", calories: 389, satiety: 7.7 },  // SI = 154
    { name: "Brune Ris", calories: 111, satiety: 6.8 },  // SI = 136
    { name: "Müsli", calories: 354, satiety: 6.3 },  // SI = 126
    { name: "Hvide Ris", calories: 130, satiety: 4.8 },  // SI = 96
    { name: "Risengrød", calories: 134, satiety: 6.0 },  // SI estimeret

    // Proteinrige fødevarer - Fisk
    { name: "Laks (grillet)", calories: 206, satiety: 8.2 },  // SI estimeret
    { name: "Torsk (kogt)", calories: 82, satiety: 8.7 },  // SI = 174
    { name: "Makrel (røget)", calories: 305, satiety: 7.5 },  // SI estimeret
    { name: "Tun (i vand)", calories: 116, satiety: 7.8 },  // SI estimeret

    // Proteinrige fødevarer - Kød og andre proteinkilder
    { name: "Kyllingebryst (grillet)", calories: 165, satiety: 7.0 },  // SI estimeret
    { name: "Bøf (oksekød)", calories: 187, satiety: 8.4 },  // SI = 168
    { name: "Æg", calories: 155, satiety: 7.5 },  // SI = 150
    { name: "Baked Beans", calories: 127, satiety: 8.5 },  // SI = 170
    { name: "Linser", calories: 116, satiety: 8.3 },  // SI = 166
    { name: "Kikærter", calories: 164, satiety: 8.1 },  // SI = 162
    { name: "Tofu", calories: 76, satiety: 6.0 },  // SI estimeret

    // Frugt
    { name: "Appelsin", calories: 47, satiety: 7.6 },  // SI = 152
    { name: "Æble", calories: 52, satiety: 7.4 },  // SI = 148
    { name: "Banan", calories: 89, satiety: 6.5 },  // SI = 130
    { name: "Vindruer", calories: 67, satiety: 4.9 },  // SI = 98
    { name: "Jordbær", calories: 32, satiety: 6.2 },  // SI estimeret
    { name: "Pære", calories: 57, satiety: 6.1 },  // SI estimeret

    // Grøntsager
    { name: "Kogt Kartoffel", calories: 77, satiety: 8.4 },  // SI = 168
    { name: "Gulerod (rå)", calories: 41, satiety: 5.8 },  // SI = 116
    { name: "Broccoli (dampet)", calories: 55, satiety: 6.2 },  // SI = 124
    { name: "Spinat (kogt)", calories: 23, satiety: 5.0 },  // SI estimeret
    { name: "Tomat (rå)", calories: 18, satiety: 4.5 },  // SI estimeret

    // Proteintilskud
    { name: "Skyr", calories: 63, satiety: 8.4 },  // SI = 168
    { name: "Græsk Yoghurt", calories: 133, satiety: 7.8 },  // SI = 156
    { name: "Hytteost", calories: 98, satiety: 7.0 },  // SI estimeret

    // Snacks
    { name: "Popcorn (uden smør)", calories: 375, satiety: 5.4 },  // SI = 108
    { name: "Peanuts (saltede)", calories: 567, satiety: 5.9 },  // SI = 118
    { name: "Croissant", calories: 406, satiety: 3.4 },  // SI = 68
    { name: "Kage", calories: 380, satiety: 3.2 },  // SI = 64
    { name: "Chokolade", calories: 546, satiety: 3.0 },  // SI estimeret
    { name: "Chips", calories: 536, satiety: 1.2 },  // SI = 12

    // Fastfood
    { name: "Burger", calories: 250, satiety: 4.4 },  // SI = 88
    { name: "Pommes Frites", calories: 312, satiety: 3.8 },  // SI = 76
    { name: "Pizza", calories: 266, satiety: 4.2 },  // SI = 84
    { name: "Hotdog", calories: 290, satiety: 3.5 },  // SI estimeret

    // Drikkevarer
    { name: "Mælk (skummet)", calories: 42, satiety: 4.6 },  // SI = 92
    { name: "Appelsinjuice (usødet)", calories: 45, satiety: 3.1 },  // SI = 62
    { name: "Sodavand (sukkerholdig)", calories: 41, satiety: 2.1 },  // SI = 42
    { name: "Kaffe (sort)", calories: 2, satiety: 0.5 },  // SI estimeret
    { name: "Te (usødet)", calories: 1, satiety: 0.5 },  // SI estimeret

    // Sovser og dressinger
    { name: "Mayonnaise", calories: 687, satiety: 2.8 },  // SI = 56
    { name: "Ketchup", calories: 112, satiety: 2.2 },  // SI = 44
    { name: "Sennep", calories: 80, satiety: 2.4 }  // SI = 48
];