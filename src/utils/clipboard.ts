export const copyToClipboard = async (text: any) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  }
};
