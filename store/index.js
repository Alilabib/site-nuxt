import axios from "axios";
export default {
    state: () => ({
        loading: false,
        services: [],
        service: {},
        categories: [],
        category: {},
        sliders: [],
        whyUs: [],
        portfolioTypes: [],
        portfolioProducts: [],
        singlePortfolio: {},
        allBlogs: [],
        singleBlog: {},
        allJobs: [],
        singleJob: {},
        features: [],
        partners: [],
        contact: {
            fullname: '',
            email: '',
            subject: '',
            content: '',
            phone: ''
        },
        branches: [],
        job: {
            jobTitle: '',
            content: '',
            email: '',
            phone: '',
            fullname: '',
            cv: '',
        },
        error: {
            static: {
                error: false,
                text: '',
            },
        },
        waiting: false,
        success: false,
        policy: [],
        terms: [],
        footLinks: [],
        clientOpinion: []
    }),
    mutations: {
        showLoading(state, payload) {
            state.loading = payload;
        },
        waiting(state, payload) {
            state.waiting = payload
        },
        success(state, payload) {
            state.success = payload
        },
        errorStatus(state, payload) {
            state.error.static.error = payload
        },
        errorText(state, payload) {
            state.error.static.text = payload
        },
        getServices(state, payload) {
            state.services = payload;
        },
        getService(state, payload) {
            state.service = payload;
        },
        getCategories(state, categories) {
            state.categories = categories;
        },
        getCategory(state, category) {
            state.category = category;
        },
        getSliders(state, sliders) {
            state.sliders = sliders
        },
        getWhy(state, whyUs) {
            state.whyUs = whyUs
        },
        getPortfolioTypes(state, portfolioTypes) {
            state.portfolioTypes = portfolioTypes
        },
        getPortfolioProducts(state, portfolioProducts) {
            state.portfolioProducts = portfolioProducts
        },
        getSinglePortfolio(state, singlePortfolio) {
            state.singlePortfolio = singlePortfolio
        },
        getAllBlogs(state, allBlogs) {
            state.allBlogs = allBlogs
        },
        getSingleBlog(state, singleBlog) {
            state.singleBlog = singleBlog
        },
        getAllJobs(state, allJobs) {
            state.allJobs = allJobs
        },
        getSingleJob(state, singleJob) {
            state.singleJob = singleJob
        },
        getFeatures(state, features) {
            state.features = features
        },
        getPartners(state, partners) {
            state.partners = partners
        },
        setContact(state, payload) {
            state.contact = payload;
        },
        getBranches(state, branches) {
            state.branches = branches;
        },
        getPolicy(state, policy) {
            state.policy = policy;
        },
        getTerms(state, terms) {
            state.terms = terms;
        },
        getFootLinks(state, footLinks) {
            state.footLinks = footLinks;
        },
        getClientOpinion(state, clientOpinion) {
            state.clientOpinion = clientOpinion;
        }
    },
    actions: {
        //slider
        async getData({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/sliders", {
                    headers: {
                        "cache-control": "no-cache",
                        "Content-type": "application/json",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getSliders", res.data.data);
            return res;

        },
        //why us
        async getwhy({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/why_us", {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("getWhy", res.data.data);
            commit("showLoading", false);
            return res;

        },

        //services
        async getAllServices({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/services", {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getServices", res.data.data);
            console.log(res);
            return res;

        },
        async getservice({ commit }, payload) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/services/" + payload, {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getService", res.data.data);
            return res;

        },

        //portfolio
        async getportfoliotypes({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/portfolio_categories", {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            // dispatch('getportfolioproducts');
            commit("showLoading", false);
            commit("getPortfolioTypes", res.data.data);
            return res;

        },

        async getportfolioproducts({ commit }, payload) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/portfolio_categories/" + payload, {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getPortfolioProducts", res.data.data);
            return res;
        },

        async getsingleportfolio({ commit }, payload) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/portfolio_products/" + payload, {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getSinglePortfolio", res.data.data);
            return res;
        },

        //blogs
        async getallblogs({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/blogs", {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getAllBlogs", res.data.data);
            return res;
        },

        async getsingleblog({ commit }, payload) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/blogs/" + payload, {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getSingleBlog", res.data.data);
            return res;
        },

        //jobs
        async getalljobs({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/our_jobs", {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getAllJobs", res.data.data);
            return res;
        },

        async getsinglejob({ commit }, payload) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/our_jobs/" + payload, {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getSingleJob", res.data.data);
            return res;
        },

        //features
        async getfeatures({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/features", {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getFeatures", res.data.data);
            return res;
        },

        //partners
        async getpartners({ commit }) {
            commit("showLoading", true);
            const res = await this.$axios
                .get("/partners", {
                    headers: {
                        "cache-control": "no-cache",
                        Accept: "application/json",
                        "Accept-Language": "" + this.$i18n.locale + ""
                    }
                });
            commit("showLoading", false);
            commit("getPartners", res.data.data);
            return res;
        },

        //contact
        async contactus({ commit }, payload) {
            console.log(payload);
            try {
                const res = await this.$axios
                    .post("/contacts", payload, {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("waiting", false)
                commit("success", true);
                commit("errorStatus", false);
                commit("errorText", "شكرا لك تم ارسال الرسالة بنجاح")
                setTimeout(() => {
                    // this.$router.push({ path: "/" });
                    commit("success", false);
                }, 2000);
                return res;
            } catch (err) {
                console.log(err.response)
                commit("success", false);
                commit("errorStatus", true);
                setTimeout(() => {
                    commit("errorStatus", false);
                }, 3000);
                commit("errorText", err.response.data.message)
            }
        },

        //contact
        async requestproduct({ commit }, payload) {
            console.log(payload);
            try {
                const res = await this.$axios
                    .post("/request_products", payload, {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("waiting", false)
                commit("success", true);
                commit("errorStatus", false);
                commit("errorText", "شكرا لك تم ارسال الرسالة بنجاح")
                setTimeout(() => {
                    // this.$router.push({ path: "/" });
                    commit("success", false);
                }, 2000);
                return res;
            } catch (err) {
                console.log(err.response)
                commit("success", false);
                commit("errorStatus", true);
                setTimeout(() => {
                    commit("errorStatus", false);
                }, 3000);
                commit("errorText", err.response.data.message)
            }
        },

        //branches
        async getbranches({ commit }) {
            commit("showLoading", true);
            try {
                const res = await this.$axios
                    .get("/branches", {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("showLoading", false);
                commit("getBranches", res.data.data)
                return res;
            } catch (err) {
                console.log(err.response)
            }
        },

        //applay job
        async applayjob({ commit }, payload) {
            console.log(payload);
            try {
                const res = await this.$axios
                    .post("/apply_jobs", payload, {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("waiting", false)
                commit("success", true);
                commit("errorStatus", false);
                commit("errorText", "شكرا لك تم ارسال الرسالة بنجاح")
                setTimeout(() => {
                    commit("success", false);
                    // this.$router.push({ path: "/jobs" });
                }, 2000);
                return res;
            } catch (err) {
                console.log(err.response)
                commit("success", false);
                commit("errorStatus", true);
                setTimeout(() => {
                    commit("errorStatus", false);
                }, 3000);
                commit("errorText", err.response.data.message)
            }
        },

        //policy
        async getpolicy({ commit }) {
            commit("showLoading", true);
            try {
                const res = await this.$axios
                    .get("/policy", {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("showLoading", false);
                commit("getPolicy", res.data.data)
                return res;
            } catch (err) {
                console.log(err.response)
            }
        },

        //terms
        async getterms({ commit }) {
            commit("showLoading", true);
            try {
                const res = await this.$axios
                    .get("/terms", {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("showLoading", false);
                commit("getTerms", res.data.data)
                return res;
            } catch (err) {
                console.log(err.response)
            }
        },

        //foot links
        async getfootlinks({ commit }) {
            commit("showLoading", true);
            try {
                const res = await this.$axios
                    .get("/footers", {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("showLoading", false);
                commit("getFootLinks", res.data.data)
                return res;
            } catch (err) {
                console.log(err.response)
            }
        },

        //client opintion
        async getclientopinion({ commit }) {
            commit("showLoading", true);
            try {
                const res = await this.$axios
                    .get("/client_feedbacks", {
                        headers: {
                            "cache-control": "no-cache",
                            Accept: "application/json",
                            "Accept-Language": "" + this.$i18n.locale + ""
                        }
                    });
                commit("showLoading", false);
                commit("getClientOpinion", res.data.data)
                return res;
            } catch (err) {
                console.log(err.response)
            }
        },
    },
    getters: {
        showLoading(state) {
            return state.loading;
        },
        showWait(state) {
            return state.waiting;
        },
        errorStatus(state) {
            return state.error.static.error;
        },
        errorText(state) {
            return state.error.static.text;
        },
        showSuccess(state) {
            return state.success;
        },
        getSliders(state) {
            return state.sliders
        },
        getWhy(state) {
            return state.whyUs
        },
        getServices(state) {
            return state.services
        },
        getService(state) {
            return state.service
        },
        getPortfolioTypes(state) {
            return state.portfolioTypes
        },
        getPortfolioProducts(state) {
            return state.portfolioProducts
        },
        getSinglePortfolio(state) {
            return state.singlePortfolio
        },
        getAllBlogs(state) {
            return state.allBlogs
        },
        getsingleBlog(state) {
            return state.singleBlog
        },
        getAllJobs(state) {
            return state.allJobs
        },
        getsingleJob(state) {
            return state.singleJob
        },
        getFeatures(state) {
            return state.features
        },
        getPartners(state) {
            return state.partners
        },
        setContact(state) {
            return state.contact
        },
        getBranches(state) {
            return state.branches
        },
        getPolicy(state) {
            return state.policy
        },
        getTerms(state) {
            return state.terms
        },
        getFootLinks(state) {
            return state.footLinks
        },
        getClientOpinion(state) {
            return state.clientOpinion
        },
    }
}