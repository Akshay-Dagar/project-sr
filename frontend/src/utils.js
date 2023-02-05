export const imgToBase64 = async imgUrl => {
    const response = await fetch(imgUrl);
    const data = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(data);
    })
}