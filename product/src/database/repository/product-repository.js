const { ProductModel } = require("../models");
const { APIError, STATUS_CODES } = require("../../utils/app-errors");

class ProductRepository {
  async CreateProduct({
    name,
    description,
    type,
    unit,
    price,
    isAvailable,
    suplier,
    banner,
  }) {
    try {
      const product = new ProductModel({
        name,
        description,
        type,
        unit,
        price,
        isAvailable,
        suplier,
        banner,
      });

      const productResult = await product.save();
      return productResult;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Product"
      );
    }
  }

  async Products() {
    try {
      return await ProductModel.find();
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Get Products"
      );
    }
  }

  async FindById(id) {
    try {
      return await ProductModel.findById(id);
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Product"
      );
    }
  }

  async FindByCategory(category) {
    try {
      const products = await ProductModel.find({ type: category });
      return products;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Category"
      );
    }
  }

  async FindSelectedProducts(selectedIds) {
    try {
      const products = await ProductModel.find({ _id: { $in: selectedIds } });
      return products;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Product"
      );
    }
  }
}

module.exports = ProductRepository;
