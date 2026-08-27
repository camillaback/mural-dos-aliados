import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const listings = sqliteTable('listings', {
  id: integer('id').primaryKey({ autoIncrement: true }), type: text('type').notNull(), category: text('category').notNull(), title: text('title').notNull(), description: text('description').notNull(), displayName: text('display_name'), whatsapp: text('whatsapp'), instagram: text('instagram'), city: text('city'), state: text('state'), priceText: text('price_text'), status: text('status').notNull().default('active'), createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(), expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(), createdIpHash: text('created_ip_hash'),
});
export const listingLinks = sqliteTable('listing_links', { id: integer('id').primaryKey({ autoIncrement: true }), listingId: integer('listing_id').notNull().references(() => listings.id), label: text('label').notNull(), url: text('url').notNull(), position: integer('position').notNull().default(0) });
export const sponsors = sqliteTable('sponsors', { id: integer('id').primaryKey({ autoIncrement: true }), title: text('title').notNull(), description: text('description').notNull(), ctaLabel: text('cta_label').notNull(), ctaUrl: text('cta_url').notNull(), placement: text('placement').notNull(), startsAt: integer('starts_at', { mode: 'timestamp_ms' }).notNull(), endsAt: integer('ends_at', { mode: 'timestamp_ms' }).notNull(), status: text('status').notNull().default('active') });

