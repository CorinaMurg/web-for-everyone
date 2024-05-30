export async function checkLabelInName(element: any, accName: string) {
    const visibleText = await element.innerText();

    if (!visibleText.trim() || !accName.trim()) {
        return true;
    }

    const normalizedVisibleText = normalizeText(visibleText);
    const normalizedAccName = normalizeText(accName);

    const numWordsToCompare = Math.min(countWords(normalizedVisibleText), countWords(normalizedAccName));

    const textToCompareFromVisible = getWords(normalizedVisibleText, numWordsToCompare).toLowerCase();
    const textToCompareFromAccName = getWords(normalizedAccName, numWordsToCompare).toLowerCase();

    return textToCompareFromVisible === textToCompareFromAccName;
}

function normalizeText(text: string) {
    return text
        .replace(/[,.!?;:"'()]/g, '')  
        .replace(/\s+/g, ' ')          
        .trim();                       
}

function countWords(text: string) {
    return text.split(' ').length;
}

function getWords(text: string, count: number) {
    return text.split(' ').slice(0, count).join(' ');
}
