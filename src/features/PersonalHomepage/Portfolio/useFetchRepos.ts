import { useQuery } from "@tanstack/react-query";
import { wait } from "../../wait";
import { baseUrl, userName } from "../../utils";

export type RepoType = {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
  description: string;
  topics: string[];
};

export const useFetchRepos = () => {
  const fetchRepos = async () => {
    await wait(1000);
    const response = await fetch(`${baseUrl}/users/${userName}/repos`);

    if (!response.ok) {
      throw new Error("Failed to load data");
    }
    const data: RepoType[] = await response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });

  return { isLoading, error, data };
};
