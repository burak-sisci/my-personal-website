console.log("Web sitem başarıyla yüklendi!");

if (document.querySelector('.galeri-container')) {
    const galeri = document.querySelector('.galeri-container');
    const galeriItemleri = document.querySelectorAll('.galeri-item');
    const gridRowGap = parseInt(window.getComputedStyle(galeri).getPropertyValue('grid-row-gap'));
    const gridRowHeight = parseInt(window.getComputedStyle(galeri).getPropertyValue('grid-auto-rows'));

    const resizeGridItem = (item) => {
        const img = item.querySelector('img');
        const rowSpan = Math.ceil((img.getBoundingClientRect().height + gridRowGap) / (gridRowHeight + gridRowGap));
        item.style.gridRowEnd = 'span ' + rowSpan;
    };

    const resizeAllGridItems = () => {
        galeriItemleri.forEach(resizeGridItem);
    };

    const handleImageLoad = () => {
        resizeAllGridItems();
    };

    galeriItemleri.forEach(item => {
        const img = item.querySelector('img');
        if (img.complete) {
            resizeGridItem(item);
        } else {
            img.addEventListener('load', () => resizeGridItem(item));
        }
    });

    window.addEventListener('resize', resizeAllGridItems);
}
