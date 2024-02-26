var nameList = [
  'Time', 
  'Past', 
  'Future', 
  'Dev',
  'Fly', 
  'Flying', 
  'Soar', 
  'Soaring', 
  'Power', 
  'Falling',
  'Fall', 
  'Jump', 
  'Cliff', 
  'Mountain', 
  'Rend', 
  'Red', 
  'Blue',
  'Green', 
  'Yellow', 
  'Gold', 
  'Demon', 
  'Demonic', 
  'Panda', 
  'Cat',
  'Kitty', 
  'Kitten', 
  'Zero', 
  'Memory', 
  'Trooper', 
  'XX', 
  'Bandit',
  'Fear', 
  'Light', 
  'Glow', 
  'Tread', 
  'Deep', 
  'Deeper', 
  'Deepest',
  'Mine', 
  'Your', 
  'Worst', 
  'Enemy', 
  'Hostile', 
  'Force', 
  'Video',
  'Game', 
  'Donkey', 
  'Mule', 
  'Colt', 
  'Cult', 
  'Cultist', 
  'Magnum',
  'Gun', 
];
export function generateRandomName() {
return nameList[Math.floor(Math.random() * nameList.length)];
    }


 export function makeRandomMessage(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }
  
  console.log(makeRandomMessage(5));