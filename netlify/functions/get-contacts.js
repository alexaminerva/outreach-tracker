import { getStore } from "@netlify/blobs";

const SEED = [
  // Title Companies — TX
  { id: 'tc_firstam_tx',      type: 'Title Company', company: 'First American Title',           market: 'TX', contactName: '', contactTitle: 'Regional VP / Business Development', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'National brand, major TX presence across DFW, Houston, Austin' },
  { id: 'tc_fidelity_tx',     type: 'Title Company', company: 'Fidelity National Title',        market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Largest title insurance co nationally' },
  { id: 'tc_stewart_tx',      type: 'Title Company', company: 'Stewart Title',                  market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'HQ in Houston — warm market, ideal for TX launch' },
  { id: 'tc_republic_tx',     type: 'Title Company', company: 'Republic Title',                 market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Texas-based, dominant in DFW' },
  { id: 'tc_independence_tx', type: 'Title Company', company: 'Independence Title',             market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Austin-headquartered, strong central TX presence' },

  // Title Companies — FL
  { id: 'tc_firstam_fl',      type: 'Title Company', company: 'First American Title',           market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: '' },
  { id: 'tc_fidelity_fl',     type: 'Title Company', company: 'Fidelity National Title',        market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: '' },
  { id: 'tc_oldrepublic_fl',  type: 'Title Company', company: 'Old Republic National Title',    market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Strong FL presence' },
  { id: 'tc_attorneys_fl',    type: 'Title Company', company: "Attorneys' Title Fund Services", market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'FL-specific, well known in state' },
  { id: 'tc_fan_fl',          type: 'Title Company', company: 'Florida Agency Network',         market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'FL-based agency network' },

  // Title Companies — NJ
  { id: 'tc_firstam_nj',      type: 'Title Company', company: 'First American Title',           market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: '' },
  { id: 'tc_fidelity_nj',     type: 'Title Company', company: 'Fidelity National Title',        market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: '' },
  { id: 'tc_stewart_nj',      type: 'Title Company', company: 'Stewart Title',                  market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: '' },
  { id: 'tc_investors_nj',    type: 'Title Company', company: 'Investors Title',                market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Strong NJ / mid-Atlantic presence' },
  { id: 'tc_commonwealth_nj', type: 'Title Company', company: 'Commonwealth Land Title',        market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Fidelity subsidiary, solid NJ presence' },

  // Builders — TX
  { id: 'b_drhorton_tx',      type: 'Builder', company: 'D.R. Horton',          market: 'TX', contactName: '', contactTitle: 'Director of Marketing / VP Sales', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Largest homebuilder in the US — DFW, Houston, Austin, San Antonio' },
  { id: 'b_lennar_tx',        type: 'Builder', company: 'Lennar',               market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: '2nd largest nationally, strong TX footprint' },
  { id: 'b_perry_tx',         type: 'Builder', company: 'Perry Homes',          market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'TX-based, builds primarily in Houston and DFW' },
  { id: 'b_davidweekley_tx',  type: 'Builder', company: 'David Weekley Homes',  market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Houston-headquartered, premium builder' },
  { id: 'b_meritage_tx',      type: 'Builder', company: 'Meritage Homes',       market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Strong in DFW and Austin' },
  { id: 'b_taylormorrison_tx',type: 'Builder', company: 'Taylor Morrison',      market: 'TX', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Austin and Houston presence' },

  // Builders — FL
  { id: 'b_drhorton_fl',      type: 'Builder', company: 'D.R. Horton',          market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Very active in FL — Orlando, Tampa, Jacksonville, South FL' },
  { id: 'b_lennar_fl',        type: 'Builder', company: 'Lennar',               market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'FL is one of Lennar\'s biggest markets, HQ in Miami' },
  { id: 'b_glhomes_fl',       type: 'Builder', company: 'GL Homes',             market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'FL-only builder, Boca Raton HQ, premium communities' },
  { id: 'b_pulte_fl',         type: 'Builder', company: 'Pulte / DiVosta',      market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'DiVosta is Pulte\'s FL brand, active in SW FL and Treasure Coast' },
  { id: 'b_ryan_fl',          type: 'Builder', company: 'Ryan Homes (NVR)',     market: 'FL', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Growing FL presence' },

  // Builders — NJ
  { id: 'b_tollbrothers_nj',  type: 'Builder', company: 'Toll Brothers',        market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Premium builder, very active in NJ suburbs' },
  { id: 'b_khovnanian_nj',    type: 'Builder', company: 'K. Hovnanian Homes',   market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'NJ-headquartered, major NJ builder' },
  { id: 'b_ryan_nj',          type: 'Builder', company: 'Ryan Homes (NVR)',     market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Active in NJ market' },
  { id: 'b_lennar_nj',        type: 'Builder', company: 'Lennar',               market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'Active in NJ' },
  { id: 'b_sharbell_nj',      type: 'Builder', company: 'Sharbell Development', market: 'NJ', contactName: '', contactTitle: '', linkedin: '', email: '', phone: '', status: 'Not Started', lastContact: '', notes: 'NJ-based regional builder' },
];

export default async (req) => {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
  try {
    const store = getStore("outreach-data");
    let data = await store.get("contacts", { type: "json" });
    if (!data) {
      await store.set("contacts", JSON.stringify(SEED));
      data = SEED;
    }
    return new Response(JSON.stringify(data), { headers });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify([]), { headers });
  }
};
