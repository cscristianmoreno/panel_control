import { HttpStatusCode } from "@angular/common/http";
import { httpCodesInterface } from "src/app/interfaces/Interface";

export const HTTP_CODES: httpCodesInterface[] = [
    { code: 0, message: "Algunos campos están sin completar", class: "class_alert_warning" },
    { code: HttpStatusCode.Continue, message: "Login satisfactorio", class: "class_alert_success" },
    { code: HttpStatusCode.Ok, message: "La operación se completó", class: "class_alert_success" },
    { code: HttpStatusCode.Created, message: "Tu usuario fue creado", class: "class_alert_success" },
    { code: HttpStatusCode.Unauthorized, message: "Usuario no autorizado", class: "class_alert_warning" },
    { code: HttpStatusCode.Conflict, message: "El usuario ya está registrado", class: "class_alert_warning" },
    { code: HttpStatusCode.InternalServerError, message: "Ocurrió un error, inténtalo más tarde", class: "class_alert_warning" },
]