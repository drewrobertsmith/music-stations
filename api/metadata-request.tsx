import { Station } from "@/station-data";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { XMLParser } from "fast-xml-parser";

type Metadata = {
  title: string;
  artist: string;
  songId: string;
  album: string;
  timestamp: number;
};

export const getTritonMetadata = (
  tritonId: Station["tritonId"],
): UseQueryOptions<Metadata, Error> => {
  return {
    queryKey: ["metadata", tritonId],
    queryFn: async () => {
      const response = await fetch(
        `https://np.tritondigital.com/public/nowplaying?mountName=${tritonId}&numberToFetch=1`,
      );
      if (!response.ok) {
        throw new Error("Failed to Fetch Metadata");
      }

      const xmlText = await response.text();
      const parser = new XMLParser();
      const parsed = parser.parse(xmlText);

      const properties =
        parsed["nowplaying-info-list"]["nowplaying-info"]["property"];

      //Extract metadata elements
      const metadata: Metadata = {
        timestamp: properties[1],
        title: properties[2],
        songId: properties[3],
        album: properties[4],
        artist: properties[5],
      };
      return metadata;
    },
    refetchInterval: 90000, //refreshes every 90 seconds
  };
};
