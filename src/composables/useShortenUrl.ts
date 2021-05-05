import { Ref, ref } from "@vue/reactivity";
import axios from "axios";

export const useShortenUrl = (): {
  error: Ref<null>;
  isLoading: Ref<boolean>;
  getShorten: (urlToShort: string) => Promise<Ref<boolean>>;
  data: Ref<null>;
} => {
  const isLoading = ref(false);
  const error = ref(null);
  const data = ref(null);

  const getShorten = async (urlToShort: string) => {
    data.value = null;
    error.value = null;
    isLoading.value = true;
    try {
      const shortUrl = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${urlToShort}`
      );
      isLoading.value = false;
      data.value = shortUrl.data.result;
    } catch (err) {
      isLoading.value = false;
      error.value = err.response.data.error;
    }
    return isLoading;
  };
  return { error, isLoading, getShorten, data };
};
