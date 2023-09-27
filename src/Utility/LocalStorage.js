
const getStoredDonate = () => {
      const getStoredDonate = localStorage.getItem('donate-money');
      if (getStoredDonate) {
            return JSON.parse(getStoredDonate);
      }
      return [];
}

const saveDonate = id => {
      
}

export {saveDonate}