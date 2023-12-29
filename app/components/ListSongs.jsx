async function ListSongs() {
    try {
      console.log()
      const response = await fetch('/api/getSongs', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },        
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('ListSongs error:', error);
    }
  }
  
  export default ListSongs;