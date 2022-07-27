<template>
    <div class="w-full">
        <div class=" w-full flex flex-col items-center justify-center px-4 py-6 lg:px-0">
            <div class="lg:w-3/5 w-full bg-primary border-2 border-primary drop-shadow-md rounded-xl my-5 z-20 ">
                <p class="text-4xl text-white w-full text-center py-4">Register</p>
                <hr class="border-white">
                <div class="flex flex-col justify-center py-3">
                    <form class="mx-2 my-5 grid grid-cols-12 gap-1 lg:gap-3 lg:mx-16 md:gap-2 md:mx-10">

                        <!-- Pname -->
                        <div class="col-span-2 flex flex-col">
                            <p class="text-white text-lg font-light">Prefix<span class="text-red-500"> *</span></p>
                            <div class="flex w-full mt-input">
                                <select class="w-full h-full rounded-2xl fixheight" v-model="prefix"
                                    @change="switchSelect($event)">
                                    <option disabled selected hidden value="">Prefix</option>
                                    <option value="1">Mr</option>
                                    <option value="2">Mrs</option>
                                    <option value="3">Miss</option>
                                    <option value="4">Ms</option>
                                    <option value="5">Other</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-span-2 mt-7" :class="otherprefix ? 'block' : 'hidden'">
                            <label class="text-white text-lg font-light"> </label>
                            <base-input name="fname" type="text" v-model="pprefix" placeholder="Prefix"
                                innerClass="rounded-2xl text-sm py-3" class="drop-shadow-md" />
                        </div>

                        <!-- First Name -->
                        <div :class="otherprefix ? 'col-span-4' : 'col-span-5'">
                            <p class="text-white text-lg font-light">First Name<span class="text-red-500"> *</span></p>
                            <base-input name="fname" type="text" v-model="first_name" placeholder="First Name"
                                innerClass="rounded-2xl text-sm py-3" class="drop-shadow-md" />
                        </div>
                        <!-- Last Name -->
                        <div :class="otherprefix ? 'col-span-4' : 'col-span-5'">
                            <p class="text-white text-lg font-light">Last Name<span class="text-red-500"> *</span></p>
                            <base-input name="fname" type="text" v-model="last_name" placeholder="Last Name"
                                innerClass="rounded-2xl text-sm py-3" class="drop-shadow-md" />
                        </div>

                        <!-- Birth Date -->
                        <div class="col-span-4 mt-input flex flex-col">
                            <p class="text-white text-lg font-light">Birthday<span class="text-red-500"> *</span></p>
                            <input type="date" name="" id="" v-model="birthday" class="rounded-2xl h-full fixheight">
                        </div>

                        <!-- Phone Number -->
                        <div class="col-span-4">
                            <p class="text-white text-lg font-light">Phone Number<span class="text-red-500"> *</span>
                            </p>
                            <base-input name="phone" type="phone" placeholder="Phone Number"
                                innerClass="rounded-2xl text-sm py-3" v-model="phone" class="drop-shadow-md" />
                        </div>
                        <!-- Email -->
                        <div class="col-span-4">
                            <p class="text-white text-lg font-light">Email<span class="text-red-500"> *</span></p>
                            <base-input name="email" type="email" placeholder="E-mail"
                                innerClass="rounded-2xl text-sm py-3" v-model="email" class="drop-shadow-md" />
                        </div>
                        <!-- Password -->
                        <div class="col-span-6">
                            <p class="text-white text-lg font-light">Password<span class="text-red-500"> *</span></p>
                            <base-input name="password" id="password" v-model="password" type="password"
                                placeholder="Password" innerClass="rounded-2xl text-sm py-3" class="drop-shadow-md" />
                        </div>
                        <!-- Password confirm -->
                        <div class="col-span-6">
                            <p class="text-white text-lg font-light">Confirm Password<span class="text-red-500">
                                    *</span></p>
                            <base-input type="password" name="confirm_password" id="confirm_password"
                                placeholder="Confirm Password" v-model="confirmpassword"
                                innerClass="rounded-2xl text-sm py-3" class="drop-shadow-md" />
                        </div>
                    </form>
                    <hr class="border-white mb-4">
                    <div class="w-full mx-16 text-white">
                        <p>Password must be</p>
                        <ol style="list-style-type:disc;">
                            <li>
                                Minimun of 8 characters
                                (
                                <base-icon icon="check" viewBox="0 0 48 48" size="20" class="text-white"
                                    v-show="password.length >= 8" />
                                <base-icon icon="xmark" viewBox="0 0 48 48" size="20" class="text-red-500"
                                    v-show="password.length < 8" /> )
                            </li>
                            <li>
                                Upper
                                (
                                <base-icon icon="check" viewBox="0 0 48 48" size="20" class="text-white"
                                    v-show="password.search(/[A-Z]/) >= 0" />
                                <base-icon icon="xmark" viewBox="0 0 48 48" size="20" class="text-red-500"
                                    v-show="password.search(/[A-Z]/) < 0" /> )
                            </li>
                            <li>
                                Lower
                                (
                                <base-icon icon="check" viewBox="0 0 48 48" size="20" class="text-white"
                                    v-show="password.search(/[a-z]/) >= 0" />
                                <base-icon icon="xmark" viewBox="0 0 48 48" size="20" class="text-red-500"
                                    v-show="password.search(/[a-z]/) < 0" /> )
                            </li>
                            <li>
                                Number
                                (
                                <base-icon icon="check" viewBox="0 0 48 48" size="20" class="text-white"
                                    v-show="password.search(/[0-9]/) >= 0" />
                                <base-icon icon="xmark" viewBox="0 0 48 48" size="20" class="text-red-500"
                                    v-show="password.search(/[0-9]/) < 0" /> )
                            </li>
                            <li>
                                One special character
                                (
                                <base-icon icon="check" viewBox="0 0 48 48" size="20" class="text-white"
                                    v-show="/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/.test(password)" />
                                <base-icon icon="xmark" viewBox="0 0 48 48" size="20" class="text-red-500"
                                    v-show="!/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/.test(password)" /> )
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- Submit Button -->
            <button type="submit" color="gray" @click.prevent="register()"
                class="py-3 rounded-2xl w-1/5 bg-primary border-none text-white font-light my-2 sm:w-3/12 drop-shadow-md">
                Register</button>
            <!-- Go to Home -->
            <nuxt-link
                class="text-center w-2/5 text-sm border-2 border-primary drop-shadow-md font-light underline bg-white py-3 rounded-2xl sm:w-3/12 my-2"
                to="/">Back to homepage</nuxt-link>
            <div class="flex justify-center mt-4">
                <recaptcha />
            </div>
        </div>

        <!-- Popup -->
        <dialog-register ref="alertSubmit" type="confirm" />
    </div>
</template>

<script>
import dialogRegister from "~/components/layout/dialog-register.vue";
export default {
    layout: 'auth',
    components: { dialogRegister },
    data() {
        return {
            selected: '',
            otherprefix: false,
            pprefix:'',
            prefix: '',
            first_name: '',
            last_name: '',
            birthday: '',
            phone: '',
            email: '',
            password: '',
            confirmpassword: '',
        }
    },
    methods: {
        switchSelect(event) {
            this.selected = event.target.value;
            if (this.selected == "5")
                this.otherprefix = true;
            else
                this.otherprefix = false;
        },
        register() {
            const self = this;
            let error = self.validateForm();
            console.log(error);

            if (error) {
                self.$toast.open({
                    message: error,
                    type: "error",
                    duration: 5000,
                });
                // self.$store.dispatch("loading/setLoading", false);

                return;
            }
            self.$refs.alertSubmit.show(
                `Would you like to confirm your registration? "${self.first_name}"`,
                "",
                // async function () {
                // await self.registerClick();
                // }
            );
        },
        validateForm() {
            const self = this;
            let error = "";
            var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

            if (!self.prefix) error = "Please select a prefix";
            else if (self.prefix == 5 && (!self.pprefix)) error = "Please enter your prefix";
            else if (!self.first_name) error = "Please enter your first name";
            else if (!self.last_name) error = "Please enter your last name";
            else if (!self.birthday) error = "Please enter your birthday";
            else if (!self.phone) error = "Please enter your phone number";
            else if (self.phone.length != 10) error = "Please enter your phone number 10 digits";
            else if (!self.email) error = "Please enter your email";
            else if (!self.password) error = "Please enter your password";
            else if (self.password.search(/[a-z]/i) < 0) error = "Password must contain lowercase letter", self.islowwer = true;
            else if (self.password.search(/[A-Z]/) < 0) error = "Password must contain capital letter", self.isupper = true;
            else if (self.password.search(/[0-9]/) < 0) error = "Password must contain number", self.isnumber = true;
            else if (!/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/.test(self.password)) error = "Password must contain special character", self.isspecial = true;
            else if (self.password.length < 7) error = "Password must be at least 8 character", self.ismin = true;
            else if (self.password != self.confirmpassword) error = "Please enter the same password";
            else error = "";

            return error;
        },
    }
}
</script>

<style scoped>
.mt-input {
    margin-top: 2px;
}

.fixheight {
    height: 46px;
}
</style>