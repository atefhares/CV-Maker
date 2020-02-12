/*
 * Copyright (c)  2020, Atef Hares - Information Technology Institute (ITI).
 * Licensed under GNU General Public License v3.0
 *
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Permissions of this strong copyleft license are conditioned on making available complete
 * source code of licensed works and modifications, which include larger works using a
 * licensed work, under the same license. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights.
 */

export default class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.pass = password;
    }
}
