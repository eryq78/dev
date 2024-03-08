<?php

namespace App\Constants;

class ConfigConstants
{
    public const OVERRIDABLE_CONFIGS = [  // correspond to laravel config keys
        'app.name',
        'app.description',
        'app.support_email',
        'app.date_format',
        'app.datetime_format',
        'app.default_currency',
        'app.google_tracking_id',
        'app.posthog_html_snippet',
        'app.payment.proration_enabled',
        'mail.default',
        'mail.from.name',
        'mail.from.address',
        'services.ses.key',
        'services.ses.secret',
        'services.ses.region',
        'services.mailgun.domain',
        'services.mailgun.secret',
        'services.mailgun.endpoint',
        'services.facebook.client_id',
        'services.facebook.client_secret',
        'services.google.client_id',
        'services.google.client_secret',
        'services.twitter-oauth-2.client_id',
        'services.twitter-oauth-2.client_secret',
        'services.bitbucket.client_id',
        'services.bitbucket.client_secret',
        'services.github.client_id',
        'services.github.client_secret',
        'services.linkedin.client_id',
        'services.linkedin.client_secret',
        'services.gitlab.client_id',
        'services.gitlab.client_secret',
        'services.paddle.vendor_id',
        'services.paddle.client_side_token',
        'services.paddle.vendor_auth_code',
        'services.paddle.webhook_secret',
        'services.paddle.public_key',
        'services.paddle.is_sandbox',
        'services.stripe.secret_key',
        'services.stripe.publishable_key',
        'services.stripe.webhook_signing_secret',
        'services.postmark.token',
        'app.customer_dashboard.show_subscriptions',
        'app.customer_dashboard.show_orders',
        'app.customer_dashboard.show_transactions',
        'app.social_links.facebook',
        'app.social_links.x',
        'app.social_links.linkedin',
        'app.social_links.github',
        'app.social_links.instagram',
        'app.social_links.youtube',
        'app.social_links.discord',
    ];
}
