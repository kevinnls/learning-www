function storeToLocal(mutationList, mutationObserver) {
    localStorage.setItem('savedCounter', mutationList.at(-1).target.data);
}

export { storeToLocal };
