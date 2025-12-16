// part 1
// // exe 1
// async function fetchRandomJoke(){
//     try {
//         const res = await fetch("https://official-joke-api.appspot.com/random_joke")
//         const data = await res.json()
//         console.log(data.setup);
//         console.log(data.punchline);
//     } catch (error) {
//         console.log("Failed to load joke");
//     }
// };
// fetchRandomJoke()

// // exe 2
// async function changeToUpperCase(){
//     try {
//         const res = await fetch("https://official-joke-api.appspot.com/random_joke")
//         let data = await res.json()
//         const makeUpeer = data.type.toUpperCase()
//         console.log(makeUpeer);
//     } catch (error){
//         console.log(error);
//     };
// }
// changeToUpperCase()

// // exe 3
// async function cumputeCharacters(){
//     try {
//         const res = await fetch("https://official-joke-api.appspot.com/random_joke");
//         let data = await res.json();
//         let charecterInSetup = 0;
//         let charecterInPunchline = 0;
//         for (let char of data.setup){
//             charecterInSetup ++;
//         };
//         for (let char of data.punchline){
//             charecterInPunchline ++;
//         };
//         console.log(charecterInSetup, charecterInPunchline);
//     } catch (error){
//         console.log(error);
//     };
// }
// cumputeCharacters()

// // exe 4
// async function cumputeCharacters(){
//     try {
//         const res = await fetch("https://official-joke-api.appspot.com/random_joke");
//         let data = await res.json();
//         let isHadQuestionMark = false;
//         for (let char of data.punchline){
//             if (char === "?"){
//                 isHadQuestionMark = true
//             };
//         };
//         if (isHadQuestionMark){
//             console.log("Punchline contains a question");
//         } else {
//             console.log("No question");
//         }
//     } catch (error){
//         console.log(error);
//     };
// }
// cumputeCharacters()