import {form} from "@src";

export default form.create({
	username: form.username({
		required: true,
	}),
});
