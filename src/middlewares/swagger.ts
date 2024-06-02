import SwaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const options = {
  customCss: ".swagger.ui .topbar { display: none }",
  customTitle: "Invoice App API",
};

const swaggerDocument = YAML.load("./src/config/swagger.yaml");

export default [SwaggerUi.serve, SwaggerUi.setup(swaggerDocument, options)];
