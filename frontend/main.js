const apiEndPoint = "https://api-dummy.ganeshaoperation.com/api/products",
    content = document.getElementById("content-card");

let dataProduct = [],
    minPrice = 0,
    maxPrice = 0,
    filter = false,
    sort = false,
    sortType = "";

const loadData = async () => {
    let dataFilter = "";

    try {
        const url = await fetch(apiEndPoint);
        dataProduct = await url.json();

        if (filter && sort) {
            if (sortType === "max") {
                dataFilter = dataProduct.data.sort(
                    (min, max) => max.price - min.price
                );
            } else {
                dataFilter = dataProduct.data.sort(
                    (min, max) => min.price - max.price
                );
            }

            dataFilter = dataProduct.data.filter(
                (product) =>
                    product.price >= minPrice && product.price <= maxPrice
            );

            loadDataProduct(dataFilter);
        } else if (sort) {
            if (sortType === "max") {
                dataFilter = dataProduct.data.sort(
                    (min, max) => max.price - min.price
                );
            } else {
                dataFilter = dataProduct.data.sort(
                    (min, max) => min.price - max.price
                );
            }

            loadDataProduct(dataFilter);
        } else if (filter) {
            dataFilter = dataProduct.data.filter(
                (product) =>
                    product.price >= minPrice && product.price <= maxPrice
            );
            loadDataProduct(dataFilter);
        } else {
            loadDataProduct(dataProduct.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const loadDataProduct = (data) => {
    const output = data
        .map((result) => {
            let price = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
            }).format(result.price);
            return `
            <div class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md lg:flex-row md:flex-col md:max-w-xl sm:flex-col sm:gap-2 hover:bg-gray-100">
                <img
                    class="object-cover w-full rounded-t-lg lg:w-40 lg:rounded-l-lg lg:rounded-tr-none md:rounded-t-lg h-96 md:h-auto md:w-auto"
                    src="${result.image_url}"
                    alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        ${result.name}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700">
                        ${result.description}
                    </p>
                    <p class="mb-3 font-normal text-gray-700">${price}</p>
                </div>
            </div>
        `;
        })
        .join("");
    content.innerHTML = output;
};

function filterData() {
    const filterId = document.getElementById("filter-harga");
    let filterHarga = filterId.options[filterId.selectedIndex].value;

    if (filterHarga === "price1") {
        filter = true;
        minPrice = 0;
        maxPrice = 100000;
    } else if (filterHarga === "price2") {
        filter = true;
        minPrice = 100000;
        maxPrice = 500000;
    } else if (filterHarga === "price3") {
        filter = true;
        minPrice = 500000;
        maxPrice = 1000000;
    } else if (filterHarga === "price4") {
        filter = true;
        minPrice = 1000000;
        maxPrice = Infinity;
    } else {
        filter = false;
    }

    loadData();
}

function sortData() {
    const sortId = document.getElementById("sorting-harga");
    let sortHarga = sortId.options[sortId.selectedIndex].value;

    if (sortHarga === "max") {
        sort = true;
        sortType = sortHarga;
    } else if (sortHarga === "min") {
        sort = true;
        sortType = sortHarga;
    } else {
        sort = false;
    }

    loadData();
}

loadData();
